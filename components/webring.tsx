import { Link } from "@nextui-org/link";

interface WebringPerson {
    id: string;
    name: string;
    url: string;
    rss: string;
    atom: string;
}

const userID="alexanderjalexander"

export default async function Webring() {
    let response, response2;
    let neighbors: WebringPerson[];
    let random: WebringPerson;
    try {
        console.log('Trying to access webring API...')

        response = await fetch(`https://sitring.eric.si/${userID}/neighbors`, {
            method: "GET"
        });
        neighbors = await response.json()

        response2 = await fetch(`https://sitring.eric.si/${userID}/random`, {
            method: "GET"
        });
        random = await response2.json()

        console.log('Done Reading! Attempting to return...')
        return(
            <div className="m-auto w-fit pb-6 text-xs text-center">
                <div>
                    &lt;- <Link className="text-xs" isBlock underline="always" color="foreground" href={neighbors[0].url}>{neighbors[0].name}</Link>
                    &bull; <Link className="text-xs" isBlock underline="always" color="foreground" href={random.url}>Random</Link>
                    &bull; <Link className="text-xs" isBlock underline="always" color="foreground" href={neighbors[1].url}>{neighbors[1].name}</Link>
                    -&gt;
                </div>
                <div>
                    This website is part of the <Link className="text-xs" isBlock underline="always" color="foreground" href={'https://github.com/Stevens-26/webring'}>Stevens Community Webring.</Link>
                </div>
            </div>
        )
    } catch(Error) {
        console.error('Something went wrong. Returning empty div.')
        console.error(Error)
        return (<div></div>)
    }
}