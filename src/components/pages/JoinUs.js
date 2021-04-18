import { React } from 'react';
import discord_icon from '../../assets/discord_icon.png'

let JoinUs = () => (
    <main className="join_container">
        <h2 className="join_title">Join The Night Witches!</h2>
        <article className="join_section">
            <p>The Night Witches are an LGBT+ friendly Star Wars Squadrons clan, which engages in competitive and community activities. Anyone who shares our values and our passions for Star Wars and SWS is welcome. If you think you would fit in with us, find out how to join us here!</p>
        </article>

        <article className="join_section">
            <h3>Night Witches Rules</h3>
            <ol className="join_list">
                <li> Be kind. This is an LGBT+ friendly place and we do not accept any sort of bigotry or hatred here. Always use people's pronouns, in text or voice chat. If you're not sure if you can say it, then you probably can't. Uncensored slurs are not allowed in the server or in DMs between server members. If someone asks you not to use a word, just don’t use it. It’s not that hard. </li>
                <li>No NSFW images or text, no memes that trend that way. We reserve the right to delete anything you post here and remove you if need be. Again, If you're not sure if you can say it then just don't.</li>
                <li>No Spamming, no solicitation. If you would like me to advertise something for you then you may DM me and we can talk.</li>
                <li>Use the #roles section. If you want to join NiWi then talk to an officer, otherwise please make sure to give yourself the "free agent" role.
                If you find that the pronouns there do not fit you and would like us to add different ones, then please contact an officer.</li>
            </ol>
        </article >

        <article className="join_section">
            <h3>How to Join NiWi</h3>
            <ol className="join_Instructionlist">
                <li>1) Join our discord server:</li>
                <a className="join_discordLogo" href="https://discord.gg/QUNVbN9edW"><img src={discord_icon} alt="discord logo" /></a>
                <li>2) Message Scratch, Slacks, or Boxer</li>
                <li>3) Have a chat with us. We want to get to know you!</li>
                <li>4) We'll let you join our temporary squadron, Cauldron! There you will get the chance to become a Night Witch!</li>
            </ol>
        </article>
    </main>
)

export default JoinUs;
