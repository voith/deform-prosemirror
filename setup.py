#!/usr/bin/env python
# -*- coding: utf-8 -*-
from setuptools import setup, find_packages

install_requires = [
    "deform>=2.0.7",
    "pyramid>=1.7.6",
    "pyramid_deform",
    "waitress",
    "pyramid_chameleon"
]

with open('README.md') as readme_file:
    long_description = readme_file.read()

setup(
    name='deform-prosemirror',
    # *IMPORTANT*: Don't manually change the version here. Use the 'bumpversion' utility.
    version='0.3.0-alpha.7',
    description='Python integration of prosemmirror',
    long_description=long_description,
    long_description_content_type='text/markdown',
    author='Tokenmarket',
    author_email='voith@tokenmarket.net',
    packages=find_packages(),
    url='https://github.com/voith/deform-prosemirror',
    include_package_data=True,
    py_modules=['deform_prosemirror'],
    install_requires=install_requires,
    license='MIT',
    zip_safe=False,
    keywords='deform prosemirror',
    classifiers=[
        'Development Status :: 3 - Alpha',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: MIT License',
        'Natural Language :: English',
        'Programming Language :: Python :: 3.6',
        'Programming Language :: Python :: 3.7',
    ],
    entry_points="""\
      [paste.app_factory]
      main = deform_prosemirror:main
    """,
)
