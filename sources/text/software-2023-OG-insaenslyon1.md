[IMG]
[IMG] Image
SOFTWARE
[IMG]
## Best Sotfware award
[IMG] Software
## Introduction
In order to create our biological tool, it was essential to develop the software. We wanted to develop software to solve a technical problem for which no existing solution was found. Indeed, the only available tool only finds guide RNAs on a single gene. But for our project, we wanted to find guide RNAs capable of hybridizing on multiple genes of the same class. Our software creates guide RNAs for CRISPR-cas9 (and its derivatives) for a whole gene database. We ensured that our code was compatible with new workflows. Furthermore, this software's open-source accessibility and adaptability make it applicable to other scientists and IGEM teams, as it includes a user-friendly interface compatible with Windows, Mac, and Linux.
[IMG] Judging
## Motivation
[IMG] Judging
Our project aims to combat antibiotic resistance globally, using the CRISPR tool in combination with a cytidine deaminase. This approach enables us to maintain the functionality of a bacterium while neutralizing its ability to resist antibiotics. We encountered an initial difficulty when it came to finding guide RNAs compatible with our method. In fact, there are limited options available to obtain guide RNAs capable of inducing nonsense mutations and loss of function in the resistance protein thanks to cytidine deaminase. Fortunately, we have identified an application capable of meeting this challenge, but it can only be applied to one gene rather than a whole gene database. Our second goal was to discover the ideal motif, but we soon realized this was an impossible task. We, therefore, looked for a program that could find motifs in a database to obtain motifs capable of binding to several genes. In short, our program emerged from the need to find a versatile motif in a database, in this case, beta-lactamase, to combat antibiotic resistance more effectively.
Our team has created software to analyze FASTA format gene databases and identify relevant patterns. The program is designed to search specifically for motifs chosen by the user according to pre-defined parameters. In addition, the user can filter these motifs by eliminating those also found in FASTA format genome databases. Ultimately, the user is presented with a list of motifs that will not interact with the organism's genome but will exclusively target the desired genes.
In addition, if the user wishes, the program can also isolate motifs that are guaranteed to create a nonsense mutation. Our program uses a search window between the 13th and 17th nucleotides after the PAM motif to identify the desired motifs. After collecting all the data, the program performs a search to rank the motifs according to their coverage rate in the gene database. In other words, it sorts motifs according to the number of genes they can bind. This approach finds the minimum number of motifs capable of binding to the maximum number of genes.
[IMG] Judging
## How to install it
[IMG] Judging
A command prompt, often referred to as 'cmd,' is a means of interacting with your computer, a daily task performed with a slightly less user-friendly interface compared to the graphical interface. However, don't worry, we will provide you with all the instructions you need to use it in order to access our app!
1. First, you need to open it:
- On Linux or macOS, search for "Terminal."
- On Windows, search for "Windows PowerShell."
You will only need to use a few command lines:
- Use 'cd' to change your directory. For example, you can type 'cd IGem/' to navigate to the 'IGem' directory or 'cd ..' to go back to the parent directory.
- 'ls' lists the elements within your current directory.
- 'pwd' displays the pathway to your current location.
2. Prerequisites:
- Ensure that you have Python installed on your computer:
- On Windows, type 'py' in your terminal. This command will inform you of the installed Python version. You should have at least version 3.8. Then, press 'Ctrl+Z' ('^Z' will appear) and hit the Enter key. This will allow you to enter a classic command line '>'.
- On Linux/MacOS, type 'python --version' in your terminal. This command will display your installed Python version. You should have at least version 3.8. After that, press 'Ctrl+Z' ('^Z' will appear). You will then be able to enter a classic command line '>'.
- If Python is not installed, you can download it from the following link: Python Download Page (Version 3.8 or higher).
- Ensure you have the correct version of pip:
- On Windows, type 'py -m pip install --upgrade pip' in your terminal.
- On Linux/MacOS, type 'pip install --upgrade pip' in your terminal.
## Installation
- Accessing the Code:
Navigate to the directory of your choice using the terminal and execute the following command:
git clone https://gitlab.igem.org/2023/software-tools/insaenslyon1.git
Alternatively, you can download it from this link.
- Enter the 'insaenslyon1-main/' folder using the 'cd' command.
- Verify if the 'app.py' file is in your current folder using 'ls.' If not, navigate to the folder where 'app.py' is located.
- Install all the required packages. To do this, check if you are in the same directory as the 'dependencies.txt' file using 'ls':
- On Windows, type '
py -m pip install -r dependencies.txt' in your terminal.
- On Linux/MacOS, type '
pip install -r dependencies.txt' in your terminal.
- Type the command:
python3 app.py
- Open any web browser and go to the address http://127.0.0.1:8080. You should now be on the home page of our site! Well done!
- Make sure to click on the "SuperBugShield: CRISPR Hunter" button to access the program.
[IMG] Model
You are now on your way to enter all the needed infos to run the program! You should find yourselves on a page named by the name of the program and with a lot of infos to fill up :
- Job title: is the directory's name where all your created docs will be stored. You can leave it empty. If so, a random name will be given to it.
- Gene is where you will need to put either a fasta file or paste the sequence you want to cut in CRISPR patterns.
- Genome: is the place where you can put a reference genome. If you choose to put one, then all the patterns found in the Gene and the genome will be ignored during the process. If you do not put any, all the patterns from the Gene will be kept.
- Write all the Files: If you check this option, all the files created during the execution of the program will be in the folder at the end. If not, you will only get the files containing the patterns and the CSV file containing the information about the mutations (Pattern, strand, number of stop mutations, number of total mutations, and the nucleotides before and after the pattern).
- Occurrence threshold: Filter to keep only motifs in at least as many different genes as the threshold number.
- Size of the patterns is simply the length of the pattern you wish to find, including the end of the pattern you fill up next. If left empty, the size of the pattern will be 23 nucleotides.
- End of the patterns: Fill the last nucleotide of your motif. For example, in the case of CRSPR cas9 our end motif is the PAM site GG. You can put any nucleotide ATCG or N if it can be any base. If left empty, the end of the motives will be GG.
- Mutation window: the part of the pattern that will be mutated to find stop codons must be in the length of the pattern. If left empty, the window will be 13 to 17.
- Do not mutate the motives: if checked, you will only get the patterns file, and no mutation will be performed.
- Covering: select the percentage you want for your database to be covered by the patterns Click on Start whenever you fill in all the information to launch the program.
Click on start whenever you filled all the infos to lauch the program.
After clicking, you will be redirected to the download page Just click on the blue link to start the download. If you left the page, don't worry. Go to the "temp directory" and search for the directory corresponding to your job! It's important to regularly clear the "temp directory", especially when working with large files.
[IMG] Judging
## Example of use
[IMG] Judging
To illustrate this, suppose you want to replicate the steps we performed to obtain the patterns used in our laboratory experiments. You can do this using the Git project you installed earlier.
- First, access the dataset containing the "oxa48" gene in fasta format and an E. Coli genome.
- In the Gene section, select the "oxa48" gene (JF388_29535).
- In the Genome section, select the "genome.fna" file.
- Check the box to display all patterns.
- Select a size of 20 and a "NGG" motif.
- Finally, select a mutation window from 13 to 16.
By following these steps, you'll be able to recreate the steps required to obtain the patterns we used in our laboratory experiments. You will then discover a folder containing several files. The first two files correspond to the files you selected at the start. The other two files contain the patterns extracted from these data.
[IMG] Model
[CAPTION] Crispr parttern for oxa48
## Implementation
We chose to code our software using Python. Even if this language is less effective and slower than C, it is also the most commonly used for bioinformatic purposes. For this reason, it seemed to be the most appropriate language to ensure accessibility and enable researchers or future iGEM teams to use and improve our software.
## How it is working
The program follows a multi-step process to obtain the desired patterns. First, it performs a pattern search by browsing the file. It uses a regular expression to find patterns of the specified length, ending with the pattern chosen by the user.
After obtaining the gene patterns, the program repeats this operation for the reference genome if the user has supplied it. Next, it performs a binary search to retain only those motifs that are exclusively present in the gene database and not in the genome database.
Once the motifs have been extracted, if the user has selected the mutation option, the program performs mutations for each gene-pattern pair to obtain the desired nucleotide sequence. The mutations are applied directly to the nucleotide sequence. Once the mutations have been made, the sequence is translated into proteins.
The program then counts the number of stop codons to determine whether the mutation has resulted in the appearance of a stop codon. In addition, it assesses for each motif whether the mutation will inevitably result in a stop codon or whether certain mutations will result in a different codon. All this information is stored in a file in CSV format.
We then search for the minimum number of guide RNAs capable of binding to many of our class genes. To do so, we transform our list of genes into an array of 0 and 1, where each index represents a gene. The association between a gene and its index is stored in a dictionary for easy access. We associate a gene array for each guide RNA motif where every gene it binds is represented by a 1 at their index and a 0 when it doesn't. Now that our motifs are associated with their gene array, we filter them by checking if a gene array includes another. To do so, we go through our list of motifs sorted by the number of genes they cover, starting with the ones with the most coverage.
In this loop, for each motif, we go through our list a second time, but this time, we begin with the motifs that cover the least amount of genes. We then compare their gene array. If all the genes of the least covering motifs are included in the most covering motifs, the least covering motif is filtered out and will not be processed in the first loop. With this method, we can discard motifs with redundant covering. This method filters out a lot of motifs, but there is still some overlap. Because even if a motif gene array is not included in another, the combination of other gene arrays can include it. That is why we compute the importance of each motif.
Firstly, we go through all the gene arrays and add them up. We get a full array where each index is at least one. Overlapping is represented by cells with a number superior to 1. With this full array, we remove each motif from the full array and check for each motif how many cells in the full gene array became zeros. It gives us the impact of a motif in a gene. If a motif has the same impact as its number of genes covered, it is essential, as no combination of motifs can cover its genes. Then, we sort our motifs by their impact. We then search for the best combination of genes thanks to the impact. At the end, we obtain a list ordered by gene importance. We call importance the value that a motif adds to the overall coverage. Therefore, the first motif in this list is optimal if we want to use only one guide RNA. The second one is optimal if used with the first one to get the maximum coverage with two guide RNAs, and so on. The files output for this part are two CSV files. One contains the sorted list of motifs by importance with the percentage of coverage if combined with the previous ones. The second is the list of motifs with their associated genes ordered by their importance.
In addition, we set out to develop an artificial intelligence-based program to predict the effectiveness of the guide RNAs we use. To this end, we relied on data from the paper we mentioned earlier. We used their training data in conjunction with the patterns generated by our program. We experimented with two types of regression, first a Lasso-type regression and then a regression based on the random forest method.
However, it is important to note that the training data was based on the E. Coli genome, which differs considerably from the multiple species present in our beta-lactamase database.
We have provided a simplified notebook to enable other teams to explore using these methods with their own training and test data, which they could generate. We chose not to include this AI approach in our final software due to poor results due to our training dataset. However, our functions still allow us to get the gene context needed for the AI approach and could be implemented by future iGEM teams.
[IMG] Judging
## Future improvements
[IMG] Judging
Our goal was to create software usable by anyone for creating guide RNA. We succeeded, but there is still room for improvement like :
- Adding a loading screen to our graphical interface.
- Implementing the AI approach to select guide RNA motifs by their effectiveness.
- Adding a display of results directly on the graphical interface.
- Adding reference genomes to the software to reduce runtime.
- Improve the minimum coverage search as, for now, it chooses arbitrarily between two motifs when they have the same coverage. This decision could be made by the user or using the motif efficiency found with the AI approach.
- Provide users with the option to choose a minimal percent of coverage or a maximum number of guide RNAs.
## References
Reuter A, Hilpert C, Dedieu-Berne A, Lematre S, Gueguen E, Launay G, Bigot S, Lesterlin C. Targeted-antibacterial-plasmids (TAPs) combining conjugation and CRISPR/Cas systems achieve strain-specific antibacterial activity. Nucleic Acids Res. 2021 Apr 6;49(6):3584-3598. doi: 10.1093/nar/gkab126. PMID: 33660775; PMCID: PMC8034655.
Bioinformatics Lab. (2019). "Be-Designer: A Tool for Genome Editing Design." Accessed on October 11, 2023. http://www.rgenome.net/be-designer/
Access Wiki Tools View Source Code
[IMG]
