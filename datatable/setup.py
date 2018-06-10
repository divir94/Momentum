from setuptools import setup

exec (open('datatable/version.py').read())

setup(
    name='datatable',
    version=__version__,
    author='divir94',
    packages=['datatable'],
    include_package_data=True,
    license='MIT',
    description='Implementation of datatables.net',
    install_requires=[]
)
