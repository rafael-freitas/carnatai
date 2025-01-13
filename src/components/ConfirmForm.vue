<template>
  <div class="form-container">
    <input
      v-model="search"
      type="text"
      placeholder="Digite o nome do convidado"
    />
    <button @click="searchGuest">Buscar</button>
    <div v-if="result">
      <p v-if="result.status === 'found'">
        <strong>{{ result.name }}</strong> e {{ result.accompaniment }} acompanhante(s)
        <button @click="confirmPresence">Confirmar Presença</button>
      </p>
      <p v-else>Convidado não encontrado</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      result: null,
    };
  },
  methods: {
    searchGuest() {
      const mockDatabase = [
        { name: "João Silva", accompaniment: 2 },
        { name: "Maria Oliveira", accompaniment: 1 },
      ];

      const guest = mockDatabase.find((g) =>
        g.name.toLowerCase().includes(this.search.toLowerCase())
      );

      this.result = guest
        ? { status: "found", ...guest }
        : { status: "not_found" };
    },
    confirmPresence() {
      alert("Presença confirmada com sucesso!");
    },
  },
};
</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

input {
  padding: 10px;
  font-size: 16px;
}

button {
  padding: 10px 20px;
  background-color: #833ab4;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
