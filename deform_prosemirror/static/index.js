const {EditorState} = require("prosemirror-state")
const {EditorView} = require("prosemirror-view")
const {Schema, DOMParser} = require("prosemirror-model")
const {addListNodes} = require("prosemirror-schema-list")
const {exampleSetup} = require("prosemirror-example-setup")
const {schema, defaultMarkdownParser, defaultMarkdownSerializer} = require("prosemirror-markdown")

class ProseMirrorView {
  constructor(target, content, ViewClass) {
    this.view = new EditorView(target, {
      state: EditorState.create({
        doc: defaultMarkdownParser.parse(content),
        plugins: exampleSetup({schema}),
      }),
      nodeViews: { paragraph(node, view) { return new ViewClass(node, view) } }
    })
  }

  get content() {
    return defaultMarkdownSerializer.serialize(this.view.state.doc)
  }
  focus() { this.view.focus() }
  destroy() { this.view.destroy() }
}
window.ProseMirrorView = ProseMirrorView
window.defaultMarkdownSerializer = defaultMarkdownSerializer
