async function main() {
  async function fetchIPAddress(domain) {
    const resp = await fetch(`https://cloudflare-dns.com/dns-query?name=${domain}&type=A`, {
      headers: {
        'accept': 'application/dns-json'
      }
    })
    const respObject = await resp.json()
    return respObject.Answer[0].data;
    // console.log(respObject.Answer[0].data);
  }

  // don't touch below this line

  const domain = 'tn.com.ar'
  const ipAddress = await fetchIPAddress(domain)

  if (!ipAddress) {
    console.log('something went wrong in fetchIPAddress')
  } else {
    console.log(`found IP address for domain ${domain}: ${ipAddress}`)
  }
}
main();