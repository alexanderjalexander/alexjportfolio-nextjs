import { LINK_STYLE } from "@/config/constants";
import { bricolageGrotesque } from "@/fonts/config";

interface WebringPerson {
  id: string;
  name: string;
  url: string;
  rss: string;
  atom: string;
}

const userID = 'alexanderjalexander';

export default async function Webring() {
  let response, response2;
  let neighbors: WebringPerson[];
  let random: WebringPerson;
  try {
    response = await fetch(`https://sitring.eric.si/${userID}/neighbors`, {
      method: 'GET',
    });
    neighbors = await response.json();

    response2 = await fetch(`https://sitring.eric.si/${userID}/random`, {
      method: 'GET',
    });
    random = await response2.json();
    return (
      <div
        className={`m-auto w-fit pb-6 text-md text-center`}
      >
        <div>
          &lt;-{' '}
          <a
            className={`${bricolageGrotesque.className} ${LINK_STYLE} font-extrabold`}
            href={neighbors[0].url}
            target="_blank"
          >
            {neighbors[0].name}
          </a>
          {' '}&bull;{' '}
          <a
            className={`${bricolageGrotesque.className} ${LINK_STYLE} font-extrabold`}
            href={random.url}
            target="_blank"
          >
            Random
          </a>
          {' '}&bull;{' '}
          <a
            className={`${bricolageGrotesque.className} ${LINK_STYLE} font-extrabold`}
            href={neighbors[1].url}
            target="_blank"
          >
            {neighbors[1].name}
          </a>
          {' '}-&gt;
        </div>
        <div>
          This website is part of the{' '}
          <a
            className={`${bricolageGrotesque.className} ${LINK_STYLE} font-extrabold`}
            href={'https://github.com/Stevens-26/webring'}
            target="_blank"
          >
            Stevens Community Webring.
          </a>
        </div>
      </div>
    );
  } catch (e) {
    console.error('Something went wrong while fetching the webring. Returning empty div.');
    console.error(e);
    return <div></div>;
  }
}
