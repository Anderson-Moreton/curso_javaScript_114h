  // URL: https://viacep.com.br/ws/03133000/json/     

  const $cep = document.querySelector("#inputCEP")
  $cep.addEventListener("input", function (e) {
    let cep = this.value
    cep = cep.replace("-", "")
    if (cep.length === 8) {
      const promise = obterEndereco(cep)
        .then(dado => {
          if (dado.erro) throw Error("CEP inexistente")
          mostrarEndereco(dado)
        })
        .catch(err => {
          mostrarErro(err.message)
        })

    }
  })

  function mostrarErro(erro) {
    document.querySelector("#bs-feedback .content").textContent = erro
    document.querySelector("#bs-feedback").style.transform = "translateY(0)"
  }

  document.querySelector("#bs-feedback .close").addEventListener("click", function () {
    esconderErro()
  })

  function esconderErro() {
    document.querySelector("#bs-feedback").removeAttribute("style")
  }

  function mostrarEndereco({ logradouro, bairro, localidade, uf }) {
    document.querySelector("#inputLogradouro").value = logradouro
    document.querySelector("#inputBairro").value = bairro
    document.querySelector("#inputCidade").value = localidade
    document.querySelector("#inputEstado").value = uf
  }

  async function obterEndereco(cep) {
    let url = `https://viacep.com.br/ws/${cep}/json/`
    try {
      const resposta = await fetch(url)
      console.log(resposta)
      if (!resposta.ok) throw Error("CEP Inválido")

      const json = await resposta.json()
      console.log(json)
      return json
    } catch (err) {
      console.log(err)
      throw Error("Algo deu errado no servidor")
    }
  }

  // function obterEndereco(cep) {
  //   let url = `https://viacep.com.br/ws/${cep}/json/`
  //   return fetch(url)
  //     .then(resp => {
  //       if (!resp.ok) throw Error("CEP Inválido")
  //       return resp
  //     })
  //     .then(resp => resp.json())
  //     .catch(err => {
  //       throw Error("Algo deu errado no servidor")
  //     })
  // }