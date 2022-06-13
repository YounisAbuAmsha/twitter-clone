const tweetButton = document.querySelector(".post-tweet");
const tweetContent = document.querySelector(".whats-h");
const results = document.querySelector(".results");

const posts = [];

function createTweet(post) {
    if (tweetContent.value === "") {
        alert("The tweet is empty ");
    } else {
        posts.unshift(post);
        while (results.firstChild) {
            results.removeChild(results.lastChild);
        }
        posts.forEach((i) => {
            const postDiv = document.createElement("div");
            postDiv.classList.add("uploded-post");
            results.appendChild(postDiv);
            const userImg = document.createElement('img');
            userImg.classList.add('name-img');
            userImg.classList.add('img-posted')
            userImg.src = 'assets/img/younis.jpg';
            userImg.alt = "userImg";
            postDiv.appendChild(userImg);
            const postPar = document.createElement('div');
            postPar.classList.add("post-par")
            postDiv.appendChild(postPar);
            const postName = document.createElement('div');
            postName.classList.add("name-at-posted")
            postPar.appendChild(postName);
            const postUsName = document.createElement('a');
            postUsName.classList.add("btn3")
            postUsName.classList.add("btn-name")
            postUsName.innerText = i.name;
            postName.appendChild(postUsName);
            const postUsName2 = document.createElement('a');
            postUsName2.classList.add("btn3");
            postUsName2.classList.add("btn-username-post");
            postUsName2.innerText = i.userName;
            postName.appendChild(postUsName2);
            const postContent = document.createElement('p');
            postContent.classList.add("p-posted")
            postContent.innerText = i.content;
            postPar.appendChild(postContent);
            results.appendChild(postDiv);
            const btnPosted = document.createElement('div');
            btnPosted.classList.add("btn-posted")
            postPar.appendChild(btnPosted);
            const postRetweet = document.createElement('button');
            postRetweet.classList.add("retweet")
            postRetweet.classList.add("material-icons")
            postRetweet.innerText = 'repeat';
            postRetweet.addEventListener("click", function () {
                createTweet({ name: "younis", userName: "@YounisAmsha", content: i.content });
            });
            btnPosted.appendChild(postRetweet);
            const likeRetweet = document.createElement('button');
            likeRetweet.classList.add("like")
            likeRetweet.classList.add("material-icons")
            likeRetweet.innerText = 'favorite';
            likeRetweet.addEventListener("click", function () {
                likeRetweet.style.color = 'red';
            });
            btnPosted.appendChild(likeRetweet);
        });
    }
}
tweetButton.addEventListener("click", function () {
    createTweet({ name: "Younis Abu Amsha", userName: "@YounisAmsha", content: tweetContent.value });
});

