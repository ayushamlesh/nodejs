/*
1.create folder name it as "your name"
2.create file bio.txt and add content to it
3.add more data
4.read data without getting the buffer data at first
5.rename the file to lpu.txt
6.now delete both the file and folder
*/
//1.h
const fs = require("fs")
fs.mkdirSync("ayush")
//folder is created

//2.
fs.writeFileSync('./ayush/bio.txt', "welcome to the natural substanses. ");

//3.
fs.appendFileSync('./ayush/bio.txt', "Typically, bioproducts are divided into three categories: bioenergy. liquid fuels such as ethanol and biodiesel. solid biomass for combustion to generate heat and power. gaseous fuel such as biogas and syngas, which can be used to generate heat and power.")

//4.
const readingfile = fs.readFileSync('./ayush/bio.txt')
rea = readingfile.toString()
console.log(rea)

//5.
fs.renameSync('./ayush/bio.txt', "./ayush/lpu.txt")

//6.
//fs.unlinkSync('./ayush/lpu.txt')
//fs.rmdirSync('./ayush')

