import fs from 'fs'

class DayOne {
    getFrequency(items: string[]) : number {
        let result: number = 0;
        items.map((x: string) => result += Number(x));
        return result;
    }
}

const filename = 'input.txt'
const items: string[] = fs.readFileSync(filename, 'utf8').split('\n');
const dayOne = new DayOne();
const frequency = dayOne.getFrequency(items);

console.log(frequency);