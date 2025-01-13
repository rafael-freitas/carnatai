<template>
  <div class="app">
    <section class="content-section section1">
      <Parallaxy :speed="100" direction="opposite" class="parallax-container bg"
          :animation="(delta) => `transform: translate3d(0, ${delta}px, 0);`"
        >
      </Parallaxy>
    </section>

    <section class="content-section flex section2">
      <!-- <Parallaxy :speed="100" direction="opposite" class="parallax-container bg"
          :animation="(delta) => `transform: translate3d(0, ${delta}px, 0);`"
        >
      </Parallaxy> -->
      <Gallery />
      <div class="flex space-x-64">
        <!-- <Parallaxy :speed="50" class="relative left-[20%] top-[10%]  z-40">
          <h1>30 carnavais</h1>
        </Parallaxy> -->
        <!-- <Parallaxy :speed="20" class="relative z-20 flex justify-start items-center">
          <img src="/tai-foto1.jpg" class="w-100 lg:w-full rounded-xl">
        </Parallaxy> -->
        <Parallaxy :speed="40" direction="opposite" class="relative z-20 flex justify-end items-center">
          <!-- <img src="/tai-foto2.jpg?2" class="w-100 lg:w-2/1 rounded-xl"> -->
          
        </Parallaxy>
        <!-- <Parallaxy :speed="80" class="relative top-[50%]  z-10">
          <img src="/tai-foto3.jpg?6" class="w-100 lg:w-1/2 rounded-xl">
        </Parallaxy> -->
      </div>
    </section>

    <section class="content-section flex section3">
      <Parallaxy :speed="100" direction="opposite" class="parallax-container bg"
          :animation="(delta) => `transform: translate3d(0, ${delta}px, 0);`"
        >
      </Parallaxy>
      <Parallaxy :speed="20" class="relative z-20 flex items-center justify-items-center">
        <div class="box rounded-xl p-12 m-6">
          <h2>Eu vou!</h2>
          <form class="" @submit.prevent="">
            <div class="f-input">
              <label for="i_nome">
                Informe seu celular para confirmar sua presença e confira os locais de entrega do abadá.
              </label>
              <input id="i_nome" required type="number" name="nome" placeholder="Digite celular aqui" class="ref-input rounded"/>
            </div>
            <div class="f-button mt-6">
              <button class="rounded">Ver meu convite</button>
            </div>
          </form>
        </div>
      </Parallaxy>
      <Parallaxy :speed="80" direction="opposite" class="relative z-20 flex justify-end items-center">
        <div class="box rounded-xl p-12 m-6 text-left">
          <h2>Entrega de abadá</h2>
          <form class="" @submit.prevent="">
            <div class="f-input-radio">
                <label for="i_local1">
                <input id="i_local1" value="stella" required type="radio" name="local" class="ref-input rounded"/>
                Retirar em Stella Maris
              </label>
                <label for="i_local2">
                <input id="i_local2" value="villa-laura" required type="radio" name="local" class="ref-input rounded"/>
                Retirar em Vila Laura
              </label>
            </div>
            <div>
              <h3 class="text-xl font-bold pt-10">Convidados:</h3>
              <table>
                <tr>
                  <td>
                    Rafael Freitas
                  </td>
                </tr>
                <tr>
                  <td>
                    Tainã Pinheiro
                  </td>
                </tr>
              </table>
            </div>
            <div class="f-button mt-6 text-center">
              <button class="rounded">Confirmar presença</button>
            </div>
          </form>
        </div>
      </Parallaxy>

    </section>

  </div>
</template>

<script>
import Parallaxy from '@lucien144/vue3-parallaxy';
import Gallery from './components/Gallery.vue';

export default {
  components: {
    Parallaxy,
    Gallery
  },
  data() {
    return {
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
}
.section1 .wrapper {
  /* top: -380px; */
  position: relative;
  width: 100%;
  height: 100%;
}
.section2 h1 {
  font-size: 2em;
  color: #222;
}
.section2 .bg {
  /* background-repeat: no-repeat; background-image: url('/section2.png'); */
}
.section3 .bg {
  background-repeat: no-repeat; background-image: url('/section3.png');
  /* background-color: #222; */
}
.section3 {
  color: #222;
}
.section3 h2 {
  font-size: 2em;
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
</style>
