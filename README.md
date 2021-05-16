<p align="center">
    <img src="assets/zoro.png" alt="Logo" height=100rem width=100rem  style="border-radius:50%">
    <h1 align="center">⚔️ Zoro a NoviceBot ⚔️</h1>
    <h3 align="center">Status: 🚀 In progress 🚀</h3>
</p>

<p align="center">
    <a href="">
      <img alt="GitHub contributors" src="https://img.shields.io/github/contributors/Arun-kc/novicebot?color=green&logo=github&style=for-the-badge" />
    </a>
    <a href="">
      <img alt="GitHub issues" src="https://img.shields.io/github/issues/Arun-kc/novicebot?color=yellow&logo=github&style=for-the-badge" />
    </a>
    <a href="">
      <img alt="License" src="https://img.shields.io/github/license/Arun-kc/novicebot?logo=github&style=for-the-badge" />
    </a>
</p>

<br>

<p>
      <img align="right" height=150rem width=150rem alt="Status: 🚀 In progress 🚀" src="https://media.giphy.com/media/YnvdzzjwKpgW9gAHq4/giphy.gif" />

</p>
Zoro is a free and opensource discord bot who's main object is to entertain its users. He's still in his infancy stage equipped with some fund and basic moderation commands. 
<br><br>
😊 Show some ❤️ by giving a star! ⭐
<br><br>


## Table of Contents
- [Installation](https://github.com/Arun-kc/novicebot#Installation)
- [Setting-Up](https://github.com/Arun-kc/novicebot#Setting-Up)
- [To-Do](https://github.com/Arun-kc/novicebot#To-Do)

## Installation

You can clone this repo and host the bot yourself
```
git clone https://github.com/Arun-kc/novicebot.git
```
After cloning, run an
```
npm install
```
to snag all of the dependencies. Of course, you need [node](https://nodejs.org/en/) installed. I also strongly recommend [nodemon](https://www.npmjs.com/package/nodemon) as it makes testing much easier.
```
npm i nodemon
```

## Setting Up

You have to create a **.env** file in order to run the bot (you can use the example file provided as a base). Your file should look something like this:

```
BOTTOKEN=123456
TENORKEY=123456
prefix=z!
AUTHORID=12345
MONGOPATH=mongodb+srv://....
```
Visit the [Discord developer portal](https://discord.com/developers/applications/) to create an app and use the client token you are given for the `BOTTOKEN` option. You can get your `TENORKEY` from [Tenor API](https://tenor.com/gifapi/documentation#quickstart). `AUTHORID` is your own Discord Id and for `MONGOPATH` is your mongodb path you get from [MongoDB Atlas](https://docs.atlas.mongodb.com/getting-started/).

Once the set up is done you can run the bot using the command 
```
npm run dev
```

## To-Do

Zoro is in his infacy stage with continuous state of development. New features/updates may come at any time
Some pending ideas are:
- Music
- Economy
- Profile
- Memes
- Reaction roles
- Full fledged moderation

<br>

*Powered by:* 
<p align="center">
<a href="https://discord.js.org/#/" title="Node.js"><img src="assets/discordjs.png" alt="Discord.js" width="50px" height="50px"  style="border-radius:50%"></a>
<a href="https://nodejs.org/" title="Node.js"><img src="https://github.com/get-icon/geticon/raw/master/icons/nodejs-icon.svg" alt="Node.js" width="50px" height="50px"></a>
<a href="https://www.mongodb.org/" title="MongoDB"><img src="https://github.com/get-icon/geticon/raw/master/icons/mongodb-icon.svg" alt="MongoDB" width="50px" height="50px"></a>
</p>


---

Contributions are welcome! <3 

Made with :heart: and JavaScript.
</p>