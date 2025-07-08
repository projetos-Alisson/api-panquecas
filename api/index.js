export default function handler(req, res) {
  res.status(200).json({
    mensagem: "🥞 Panqueca servida com sucesso!",
    ingredientes: ["farinha", "leite", "ovo", "filosofia", "chakra"]
  });
}
