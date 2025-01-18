<template>
  <div class="app">
    <nav class="navbar">
      <a href="#home" @click.prevent="smoothScroll('home')">Home</a>
      <a href="#fotos" @click.prevent="smoothScroll('fotos')">Fotos</a>
      <a href="#abada" @click.prevent="smoothScroll('abada')">Entrega de Abadás</a>
    </nav>
    <section id="home" class="content-section section1">
      <Parallaxy :speed="300" direction="opposite" class="absolute left-[13%] top-[-10%] z-50">
        <!-- <h1>Você é mais que convidado para estar comigo nesse bloquinho!</h1> -->
        <div id="embed-iframe" style="width:200px"></div>
        <!-- <button @click="autoplayClick">E para entrar no clima do evento, uma playlist especial para um dia especial. Solta o PLAY!</button> -->
      </Parallaxy>
      <Parallaxy :speed="100" direction="opposite" class="parallax-container bg lg:top-[-100px]"
          :animation="(delta) => `transform: translate3d(0, ${delta}px, 0);`"
        >
      </Parallaxy>
      <Parallaxy :speed="120" class="absolute left-[15%] lg:left-[35%] top-[70%] lg:top-[65%] z-40">
        <div class="font-bold">Está chegando a hora!!!</div>
        <vue3-flip-countdown 
        mainColor="#bc55f7" 
        secondFlipColor="#f96e8f" 
        mainFlipBackgroundColor="#392b47"
        secondFlipBackgroundColor="#745a8e"
        :labels="{days: 'Dias', hours: 'Horas', minutes: 'Minutos', seconds: 'Segundos'}"
        deadline="2025-02-22 14:00:00"/>
      </Parallaxy>
    </section>

    <section id="fotos" class="content-section flex section2">
      

      <div class="flex space-x-64">
        <!-- <Parallaxy :speed="50" class="relative left-[20%] top-[10%]  z-40">
          <h1>30 carnavais</h1>
        </Parallaxy> -->
        <!-- <Parallaxy :speed="20" class="relative z-20 flex justify-start items-center">
          <img src="/tai-foto1.jpg" class="w-100 lg:w-full rounded-xl">
        </Parallaxy> -->
        <Parallaxy :speed="40" direction="opposite" class="relative z-20 flex justify-end items-center">
          <!-- <img src="/tai-foto2.jpg?2" class="w-100 lg:w-2/1 rounded-xl"> -->
          <Gallery />
        </Parallaxy>
        <!-- <Parallaxy :speed="80" class="relative top-[50%]  z-10">
          <img src="/tai-foto3.jpg?6" class="w-100 lg:w-1/2 rounded-xl">
        </Parallaxy> -->
      </div>
    </section>

    <section id="abada" class="content-section flex section3">
      <Parallaxy :speed="100" direction="opposite" class="parallax-container bg"
          :animation="(delta) => `transform: translate3d(0, ${delta}px, 0);`"
        >
      </Parallaxy>
      <Parallaxy v-if="!convidado" :speed="20" class="relative z-20 flex items-center justify-items-center">
        <div class="box rounded-xl p-12 m-6">
          <h2>Você é mais que convidado para estar comigo nesse bloquinho!</h2>
          <div class="error-box p-8 rounded font-bold" v-if="error">{{ error }}</div>
          <p>Eu, como uma soteropolitana nata nascida e criada no carnaval de Salvador, não poderia comemorar meus 30 anos, em fevereiro, de outra forma.</p>
          <p>Se você recebeu esse link, é porque sua presença é muuuito importante!</p>
          <p>Estou mandando com bastante antecedência ein? <br/><strong>Adiante seu lado e presença até o dia 31/01!!</strong> <br/>Não tem virada de lote, mas as camisas são limitadas!</p>
          <p class="font-bold">Entrega dos abadás: a partir de 10/02/2025.</p>
          <p>Em seguida, selecione onde fica mais fácil para acertamos a entrega do abadá. Se não puder comparecer, peço que não preencha</p>
          <form class="" @submit.prevent="">
            <div class="f-input">
              <label for="i_telefone" class="font-bold">
                Para confirmar presença, coloque o seu telefone aqui
              </label>
              <input id="i_telefone" required type="number" inputmode="numeric" name="telefone" v-model="telefone" placeholder="Ex: 71999995555" class="ref-input rounded"/>
            </div>
            <div class="f-button mt-6">
              <button :disabled="loading" @click="submit" class="rounded px-8">Ver meu convite</button>
            </div>
          </form>
        </div>
      </Parallaxy>
      <Parallaxy v-if="convidado" :speed="80" direction="opposite" class="relative z-20 top-[10%] lg:top-[0%] flex justify-end items-center">
        <div class="box rounded-xl p-12 m-6 text-left">
          <h2>Entrega de abadá</h2>
          <form class="" @submit.prevent="">
            <div class="f-input-radio">
              <label for="i_local1" :class="local === 'stella'? 'font-bold': ''">
                <input id="i_local1" value="stella" v-model="local" type="radio" name="local" class="ref-input rounded"/>
                Retirar em Stella Maris
              </label>
              <label for="i_local2" :class="local === 'villa-laura'? 'font-bold': ''">
                <input id="i_local2" value="villa-laura" v-model="local" type="radio" name="local" class="ref-input rounded"/>
                Retirar na Vila Laura
              </label>
            </div>
            <div>
              <h3 class="text-xl font-bold pt-10">Convidados:</h3>
              <table class="font-bold">
                <tr>
                  <td>
                    {{ convidado?.nome }}
                  </td>
                </tr>
                <tr 
                  v-for="(row, index) in convidado?.acompanhantes"
                  :key="index"
                >
                  <td>
                    {{ row.nome }}
                  </td>
                </tr>
              </table>
              <div class="box-confirmado p-8 rounded font-bold text-center" v-if="convidado.confirmado == 'sim'">Prensença confirmada! <br/>Te espero lá!!!</div>
            </div>
            <div class="f-button mt-6 text-center">
              <button :disabled="loading" @click="submitConfirmar" class="rounded px-8" v-if="convidado.confirmado != 'sim'">Confirmar presença</button>
            </div>
          </form>
        </div>
      </Parallaxy>

      <Parallaxy v-if="convidado" :speed="80" direction="normal" class="absolute m-20 z-20 top-[10%] lg:left-[50%] lg:top-[30%] flex justify-start items-center">
        <img src="/abada.png" class="w-100 lg:w-full rounded-xl" />
      </Parallaxy>

    </section>

  </div>
</template>

<script>
import {ref, onMounted} from 'vue'
import Parallaxy from '@lucien144/vue3-parallaxy';
import Gallery from './components/Gallery.vue';
import axios from 'axios'

export default {
  components: {
    Parallaxy,
    Gallery,
  },
  setup () {
    const telefone = ref('')
    const local = ref('stella')
    const convidado = ref(null)
    const confirmado = ref(null)
    const error = ref(null)
    const loading = ref(false)
    const submit = async () => {
      loading.value = true
      error.value = null
      let res = await axios.get('/api/convidado?cel=' + telefone.value, {
        
      })
      console.log("🚀 ~ submit ~ telefone.value:", telefone.value)
      console.log("🚀 ~ submit ~ res:", res.data)

      if (res.data?.status !== 'error') {
        convidado.value = res.data.data
      }
      else {
        error.value = res.data.error
      }
      loading.value = false
    }
    const submitConfirmar = async () => {
      loading.value = true
      error.value = null
      let res = await axios.get('/api/confirmar?cel=' + telefone.value + '&local=' + local.value, {
        
      })

      if (res.data?.status !== 'error') {
        convidado.value = res.data.data
        // confirmado.value = res.data.data
      }
      else {
        error.value = res.data.error
      }
      loading.value = false
    }

    const smoothScroll = (id) => {
      const target = document.getElementById(id); // Obtém o elemento pelo ID
      if (target) {
        target.scrollIntoView({
          behavior: "smooth", // Define a rolagem suave
          block: "start", // Alinha o início da seção ao topo
        });
      }
    }

    var controller

    const autoplayClick = () => {
      controller.play();
    }

    onMounted(() => {      
      window.onSpotifyIframeApiReady = IFrameAPI => {
        const element = document.getElementById('embed-iframe');
        const options = {
          uri: 'spotify:playlist:4ZMtWQn47mhpUyemcRQQ8K',
        };
        const callback = EmbedController => {
          controller = EmbedController;
          controller.play();
          controller.addListener('ready', () => {
            console.log('ready');
            autoplayClick()
          });
        };
        IFrameAPI.createController(element, options, callback);
      };
    })

    return {
      autoplayClick,
      smoothScroll,
      loading,
      error,
      local,
      convidado,
      telefone: telefone,
      submitConfirmar,
      submit
    }
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: Helvetica;
  width: 100%;
  height: 100%;
  background-color: #f1e3f9;
}
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 10px;
}

.navbar a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 5px 10px;
  transition: background 0.3s;
}

.navbar a:hover {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
}
.content-section {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
}

.parallax-window {
  top: 0;
  left: 0;
  width: 100%;
}
.parallax-container {
  position: absolute;
  /* position: absolute; overflow: hidden; z-index: -100; */
  /* top: 0px; left: 0px;  */
  width: 100%; height: 100%;
  background-position: center center; background-size: cover; 
  /* position: absolute; top: 0px; left: 0px;  */
  /* overflow: hidden; pointer-events: none;  */
  /* transform-style: preserve-3d;  */
  /* will-change: transform;  */
  /* backface-visibility: hidden;  */
  /* margin-top: 0;  */
  transform: translate3d(0px, 0px, 0px); opacity: 0.9; filter: none;
}
.section1 .bg {
  background-repeat: no-repeat; background-image: url('/section1.jpg');
  /* top: -100px; */
}
.section1 .wrapper {
  top: -100px;
  position: relative;
  width: 100%;
  height: 100%;
}
.section1 h1 {
  font-size: 1.5em;
  color: #222;
  padding: 0 1em;
}
.section2 .bg {
  /* background-repeat: no-repeat; background-image: url('/section2.png'); */
}
.section3 .bg {
  background-repeat: no-repeat; background-image: url('/section3.png');
  /* background-color: #222; */
  top: -110px;
}
.section3 {
  color: #222;
}
.section3 h2 {
  font-size: 1.5em;
}
.section4 .bg {
  background-repeat: no-repeat; background-image: url('/section4.png');
}
.app {
  /* top: -380px; */
  position: relative;
  width: 100%;
  height: 100%;
}
.f-input label {
  display: block;
}
.f-input-radio label {
  display: block;
}
.f-input input{
  padding: .5em;
  background: #f9f9fd;
  color: black;
}
.f-button button{
  padding: .5em;
  background: #3c3cd2;
  color: #ffffff;
}
.f-button button:hover{
  background: #2020a7;
  color: #ffffff;
}

.box {
  background: #f1e3f9dc;
}
.error-box {
  background: rgb(250, 110, 110);
}
.box-confirmado {
  background: rgb(110, 250, 117);
}
</style>
