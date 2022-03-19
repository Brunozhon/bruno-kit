function encodeHTML(html) {
  return html.replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;").replaceAll("\'", "&apos;")
}
