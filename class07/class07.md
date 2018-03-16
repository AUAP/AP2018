Messy notes of class07 - Language Plus Code

Agenda:
- Artwork showcase: Vocable Code by Winnie Soon
- Contextualize the theme 'Language"
- Short performance
- Conceptual and technical discussion on Vocable Code 
- Peer-Tutoring (group 5)/Respondents (group 6): JSON
- Make your own vocable code
- Final Project walkthrough
- Tasks for next week

#### Why Language plus code? 
- human language and programming language
- abstraction and translation
- semotic (signs and symbols)
  - semantics: the relations of signs to their context 
  - syntactics: formal structure
- reading/writing/speaking
- Expressively: different voices
- Bodily meaning
- Performativity
- code and poetry

#### Vocable Code (2017) by Winnie Soon
![image](http://siusoon.net/wp-content/uploads/2017/10/vocablecode.png)

Vocable Code is both a work of “software art” (software as artwork, not software to make an artwork) and a “codework” (where the source code and critical writing operate together) produced to embody “queer code”. It examines the notion of queerness in computer coding. Through collecting voices and statements from others that help to complete the sentence that begins: “Queer is…”, the work is computationally and poetically composed where the texts and voices are repeated and disrupted by mathematical chaos, creating a dynamic audio-visual literature and exploring the performativity of code, subjectivity and language. Behind the executed web interface, the code itself is deliberately written as a codework, a mix of a computer programming language and human language, exploring the material and linguistic tensions of writing and reading within the context of (non)binary poetry and computer code.

<img src="https://github.com/AUAP/AP2018/blob/master/class07/setup.png" width="400px">

[RunMe](https://rawgit.com/siusoon/VocableCode/master/vocablecode_program/index.html)

[More details](https://github.com/siusoon/VocableCode)

Performance time - vocable code

#### New syntax:

- add new font 
```
withPride = loadFont('inclusive/Gilbert_TypeWithPride.otf');
```
- delete object > object.splice
```
queerRights.splice(non_binary, floor(1.34387));
```
- concatenated text/characters
```
let getVoice = "inclusive/voices/" + iam + makingStatements + ".wav";
```
- read JSON
![image4](https://github.com/AUAP/AP2018/blob/master/class07/json.png)
```
whatisQueer = loadJSON('inclusive/voices.json');
queers = whatisQueer.queers;
SpeakingCode(queers[WhoIsQueer].iam, makingStatements);
```
#### Technical discussion:

[Source Code](https://github.com/siusoon/VocableCode/tree/master/vocablecode_program)

```
Based on the executed format and the source code, 
can you lay out the algorithm? How vocable code works? 
```

#### Conceptual discussion on Vocable Code 
```
Go through the notes that you have taken, then go through the runme and the source code of Vocable Code.
Discussion: 
- What are voices? 
- Can you draw a relation between the two pieces based on the notes that you have written? 
```

#### Working in groups: producing your vocable code

**Instructions for voice recording:**
1.	Find a blank paper and prepare to write a sentence.
2.	Complete the sentence with the starting words: “Queer is…”
  - Each sentence contains no more than 5 words (the starting words- “queer is” is not included)
  -	More than 1 sentence is allowed but not more than 3.
  -	English word/sentence is required.
  -	It is ok to have just one word.
3.	Download/Locate a voice recording app on your smartphone (e.g “Voice Recorder” on Android phone or “Voice Memos app” on iphone)
4.	Try to find a quiet environment and record your voice, and see if the app works (controlling the start and end of the recording button).
5.	Prepare to record your voice with your written sentence(s).
  -	It is up to you to decide the temporality and rhythm of speaking the text.
  -	It is up to you to either speak the full word or full sentence with different pitch/tempo/rhythm.
  -	You can also speak on a certain part (phonetics) of the word or sentence. In other words, the word/sentence doesn’t need to be fully pronounced. 
  -	The first two provided words “queer is” can be omitted. 
6.	Record your voice, and each voice file holds one sentence only.

**Modify the code**
- Structure of the code 
<img src="https://github.com/AUAP/AP2018/blob/master/class07/file_structure.png" width="450px">
- JSON file
- Download the whole vocable code folder
- modify the json file to include your own voice
- convert the voice files into wave file format
- Put the wave file into the voice folder 
- Run the vocable code 

### Flow chart
![image3](https://github.com/siusoon/VocableCode/blob/master/Flow_Chart_of_Vocable%20Code.jpg)

#### Tasks for next week
- miniEx7 - [Group work: e-lit](https://github.com/AUAP/AP2018/blob/master/all_miniex/mini_ex7.md)
- Peer-tutoring: Group 6 / Respondents: Group 7, Topic: Parsing

---
#### Notes on reading (my own notes)
Vocable code by Geoff Cox:

the aesthetic aspects of programs but particularly to their speech-like qualities, to make apparent the vocable elements that underpin some unstable aspects of coding practices (p. 17)

p. 19: the body is implicated in coding practice. Through the connection to speech, programs can be called into action as utterances....as if possessing a voice.

p. 23: contract spoken and written forms of language

p. 24: "Wall was emphasizing the point that code has expressive qualities, and the need for programmers to 'express both their emotional and technical natures simultaneously"

- syntactical and semantic registers

p. 25: "The interplay of the body of the code, the programmer's comments, and the human-machine reader express how hardware and software, text and code, are embodied"

p. 26: "This embodiment issue has become crucially important for unerstanding the interactive experience of computation, extending the limits of HCI (human-computer interaction) traditions."

-> bodily relationships.

"Programmers bring bodily meaning to their work by applying models of human perception, and by trying to account for the ways that other social bodies are drawn into the process of meaning production"

p. 27: "computer programs have bodies in the sense that other materialities and meanings are deeply interwoven, and these necessarily exist as part of wider social relations"

p. 29: "to give voice to those without a voice"

p. 32: "The meanings of words are not derived from an inherent logical structure alone that manipulates symbols into particular sequences (like a program), but also from their social usage."

speech -> complexities of meaning production

p. 35: speech act: "sentences can do something as opposed to just saying something: "to utter the sentence ... is not to describe my doing of what I should be said in so uttering to be doing or to state that i am doing it: it is to do it"

-> performative

p. 35: "Programs are operative inasmuch as they do what they say, but moreover they do what they say at the moment of saying it"

- voice of the programmer

