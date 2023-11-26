let revealFlag = false

document.querySelector("#mail-link").addEventListener("click", e => {
  navigator.clipboard.writeText("contact@jacoblockett.com")
  
  const toast = document.querySelector("#toast")

  toast.classList.add("reveal")

  if (!revealFlag) {
    revealFlag = true
    setTimeout(() => {
      toast.classList.remove('reveal')
      revealFlag = false
    }, 5000)
  }
})