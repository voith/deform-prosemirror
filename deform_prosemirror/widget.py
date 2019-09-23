from deform.widget import TextInputWidget


class ProseMirrorWidget(TextInputWidget):
    readonly_template = 'readonly/richtext'
    delayed_load = False
    strip = True
    template = 'prosemirror'
    requirements = (('prosemirror', None),)

