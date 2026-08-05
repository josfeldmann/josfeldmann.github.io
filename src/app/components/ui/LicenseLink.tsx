
type LLProps = {
  license: string;
};

export default function LicenseLink( {license} : LLProps ) {

let link = "";
let name = "";

if (license == "CC-BY-SA-3.0") {
    name = "CC BY-SA 3.0 Attribution-ShareAlike 3.0 International"
    link = "https://creativecommons.org/licenses/by-sa/3.0/deed.en";
} else if (license == "CC-BY-SA-4.0") {
    name = "CC BY-SA 4.0 Attribution-ShareAlike 4.0 International";
    link = "https://creativecommons.org/licenses/by-sa/4.0/deed.en"
} else if (license == "CC0") {
    name = "CC0 1.0 Universal";
    link = "https://creativecommons.org/publicdomain/zero/1.0/";
}

  return (
<a href={link}>
{name}
</a>
);
}