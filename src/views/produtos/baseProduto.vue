<script>
export default {
  methods: {
    adiciona(produto) {
      console.log(produto);
      this.$emit("comprar", produto);
    },
  },
};
</script>