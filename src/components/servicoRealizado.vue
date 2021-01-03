<script>
export default {
  methods: {
    realizarServico(cliente) {
      this.$emit('realizado', cliente);
    }
  }
}
</script>