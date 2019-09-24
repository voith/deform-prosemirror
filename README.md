# deform-prosemirror

This library offers a widget that renders the prosemirror editor

### Rebuild

In order to rebuild library run: 
 - chmod +x build_js.sh
 - ./ build_js.sh
 
 Demo
====

Run demo locally::

    git clone git@github.com:miohtama/deform_prosemirror.git
    virtualenv venv
    source venv/bin/activate
    pip install -e .
    pserve development.ini --reload

Usage
=====

* Your view must extract widget JS and CSS assets from Deform form

* Your base template must insert JS and CSS assets to the ``<head>``. Please note that there is a limitation that Deform executes ``<script>`` tags in ``<body>``.
