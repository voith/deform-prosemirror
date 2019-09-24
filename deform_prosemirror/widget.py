from colander import Invalid
from colander import null
from deform.compat import string_types
from deform.widget import TextInputWidget


class ProseMirrorWidget(TextInputWidget):
    readonly_template = "readonly/textinput"
    delayed_load = False
    strip = False
    template = 'prosemirror'
    requirements = (('prosemirror', None),)

    def serialize(self, field, cstruct, **kw):
        if cstruct in (null, None):
            cstruct = ""
        readonly = kw.get("readonly", self.readonly)
        template = readonly and self.readonly_template or self.template
        values = self.get_template_values(field, cstruct, kw)
        return field.renderer(template, **values)

    def deserialize(self, field, pstruct):
        if pstruct is null:
            return null
        elif not isinstance(pstruct, string_types):
            raise Invalid(field.schema, "Pstruct is not a string")
        if self.strip:
            pstruct = pstruct.strip()
        if not pstruct:
            return null
        return pstruct
