let completed = true;

let learnJS = new Promise(function (resolve, reject) {
    setTimeout(() => {
        if (completed) {
            resolve("I have completed learning JS.");
        } else {
            reject("I haven't completed learning JS yet.");
        }
    }, 3 * 1000);
});

learnJS
.then(() => {console.log('i am done promises')})
.catch(() => {console.log('you need to learn more')})

/*
promise.all()
*/

/*
promise.race()
*/
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The first promise has resolved');
        resolve(10);
    }, 1 * 1000);

});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The second promise has resolved');
        resolve(20);
    }, 2 * 1000);
});


Promise.race([p1, p2])
    .then(value => console.log(`Resolved: ${value}`))
    .catch(reason => console.log(`Rejected: ${reason}`));

/*
output:
The first promise has resolved
Resolved: 10
The second promise has resolved
*/