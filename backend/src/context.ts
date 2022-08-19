import fs from 'node:fs';

interface Paste {
    highlight: string | undefined;
    title: string;
    description: string | undefined;
    text: string;
}

class DatabaseContext {
    constructor() {
        if (!fs.existsSync('storage')) fs.mkdirSync('storage');
    }

    public setPaste(name: string, paste: Paste): void {
        fs.writeFileSync(`storage/${name}`, JSON.stringify(paste));
    }

    public getPaste(name: string): Paste {
        return <Paste>JSON.parse(fs.readFileSync(`storage/${name}`).toString());
    }
}

export { DatabaseContext, Paste };
