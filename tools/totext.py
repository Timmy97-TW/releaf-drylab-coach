import sys, re, html
from html.parser import HTMLParser
SKIP={'script','style','svg','noscript','nav','footer','head','button','select','canvas'}
BLOCK={'p':'','li':'- ','h1':'# ','h2':'## ','h3':'### ','h4':'#### ','h5':'##### ','h6':'###### ','figcaption':'[CAPTION] ','blockquote':'> ','td':'| ','th':'| ','dt':'','dd':'  ','summary':'[FOLD] ','caption':'[TABLE] '}
VOID={'img','br','input','meta','link','source','hr','wbr','area','col','embed','track','param'}
ZONE=sys.argv[3] if len(sys.argv)>3 else 'all'   # all | body (leave out the abstract sheet) | abstract (only it)
class P(HTMLParser):
    def __init__(s):
        super().__init__(convert_charrefs=True); s.out=[]; s.buf=[]; s.stack=[]; s.skip=0; s.pref=''
        s.zd=0   # depth inside a section.abstract
    def zone_ok(s):
        return ZONE=='all' or (ZONE=='body' and s.zd==0) or (ZONE=='abstract' and s.zd>0)
    def handle_startendtag(s,tag,a):
        s.handle_starttag(tag,a, void=True)
    def flush(s):
        t=re.sub(r'\s+',' ',''.join(s.buf)).strip()
        if t: s.out.append(s.pref+t)
        s.buf=[]; s.pref=''
    def handle_starttag(s,tag,a,void=False):
        a=dict(a)
        if not void and tag not in VOID:
            if s.zd: s.zd+=1
            elif 'abstract' in (a.get('class') or '').split(): s.flush(); s.zd=1
        if not s.zone_ok():
            return
        if tag in SKIP and not (tag=='nav' and s.zd): s.skip+=1; return
        if s.skip: return
        if s.zd and tag=='span' and (a.get('class') or '').startswith(('abs-','abstract')) and ''.join(s.buf).strip(): s.buf.append(' · ')
        if tag in BLOCK or tag in ('div','section','article','br','tr','ul','ol','table','figure'):
            s.flush()
            if tag in BLOCK: s.pref=BLOCK[tag]
        if tag=='img' and (a.get('alt') or '').strip():
            s.flush(); s.out.append('[IMG] '+a['alt'].strip())
        if tag=='img' and not (a.get('alt') or '').strip():
            s.flush(); s.out.append('[IMG]')
    def handle_endtag(s,tag):
        ok=s.zone_ok()
        if s.zd and tag not in VOID:
            s.zd-=1
            if s.zd==0: s.flush()
        if not ok: return
        if tag in SKIP and not (tag=='nav' and s.zd): s.skip=max(0,s.skip-1); return
        if s.skip: return
        if tag in BLOCK or tag in ('div','section','article','tr','ul','ol','table','figure'): s.flush()
    def handle_data(s,d):
        if not s.skip and s.zone_ok(): s.buf.append(d)
p=P(); p.feed(open(sys.argv[1],errors='ignore').read()); p.flush()
lines=[]; 
for l in p.out:
    if lines and lines[-1]==l: continue
    lines.append(l)
# collapse runs of bare [IMG]
o=[]
for l in lines:
    if l=='[IMG]' and o and o[-1].startswith('[IMG]'): continue
    o.append(l)
open(sys.argv[2],'w').write('\n'.join(o)+'\n')
