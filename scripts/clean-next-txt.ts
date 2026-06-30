import fs from "fs";
import path from "path";

const outDir = path.join(process.cwd(), "out");

function deleteTxtFiles(dir: string): void {
    if (!fs.existsSync(dir)) return;

    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);

        if (entry.isDirectory()) {
            deleteTxtFiles(fullPath);
        } else if (entry.isFile() && entry.name.endsWith(".txt")) {
            fs.unlinkSync(fullPath);
            console.log(`Deleted: ${fullPath}`);
        }
    }
}

deleteTxtFiles(outDir);