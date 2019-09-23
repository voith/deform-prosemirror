const {EditorState} = require("prosemirror-state")
const {EditorView} = require("prosemirror-view")
const {Schema, DOMParser} = require("prosemirror-model")
//const {schema} = require("prosemirror-schema-basic")
const {addListNodes} = require("prosemirror-schema-list")
const {exampleSetup} = require("prosemirror-example-setup")
const {schema, defaultMarkdownParser, defaultMarkdownSerializer} = require("prosemirror-markdown")

// Mix the nodes from prosemirror-schema-list into the basic schema to
// create a schema with list support.
//const mySchema = new Schema({
//  nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
//  marks: schema.spec.marks
//})
//
//const state = EditorState.create({
//    doc: DOMParser.fromSchema(mySchema).parse(document.querySelector("#content")),
//    plugins: exampleSetup({schema: mySchema})
//  })
//
//class ParagraphView {
//
//  update(node) {
//    let content = document.querySelector("#content");
//    console.log(content.value);
//  }
//}
//
//window.view = new EditorView(document.querySelector("#editor"), {
//  state: state,
//  nodeViews: {
//    paragraph(node) { return new ParagraphView(node) }
//  }
//})


//import {EditorView} from "prosemirror-view"
//import {EditorState} from "prosemirror-state"
//import {schema, defaultMarkdownParser,
//        defaultMarkdownSerializer} from "prosemirror-markdown"
//import {exampleSetup} from "prosemirror-example-setup"

class MarkdownView {
  constructor(target, content) {
    this.textarea = target.appendChild(document.createElement("textarea"))
    this.textarea.value = content
  }

  get content() { return this.textarea.value }
  focus() { this.textarea.focus() }
  destroy() { this.textarea.remove() }
}

class ProseMirrorView {
  constructor(target, content) {
    this.view = new EditorView(target, {
      state: EditorState.create({
        doc: defaultMarkdownParser.parse(content),
        plugins: exampleSetup({schema})
      })
    })
  }

  get content() {
    return defaultMarkdownSerializer.serialize(this.view.state.doc)
  }
  focus() { this.view.focus() }
  destroy() { this.view.destroy() }
}

let place = document.querySelector("#editor")
let view = new ProseMirrorView(place, document.querySelector("#content").value)

//document.querySelectorAll("input[type=radio]").forEach(button => {
//  button.addEventListener("change", () => {
//    if (!button.checked) return
//    let View = button.value == "markdown" ? MarkdownView : ProseMirrorView
//    if (view instanceof View) return
//    console.log(view.content);
//    let content = view.content
//    view.destroy()
//    view = new View(place, content)
//    view.focus()
//  })
//})
