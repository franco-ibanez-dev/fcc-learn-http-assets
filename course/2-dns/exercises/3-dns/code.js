
function getDomainNameFromURL(url) {
  const urlObj = new URL(url);
  return urlObj.hostname;
}

// don't touch below this line

const bootdevURL = 'https://www.youtube.com/watch?v=2JYT5f2isg4&t=569s'
const domainName = getDomainNameFromURL(bootdevURL)
console.log(`The domain name for ${bootdevURL} is ${domainName}`)
