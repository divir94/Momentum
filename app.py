import pandas as pd

import dash
import dash_core_components as dcc
import dash_html_components as html
from dash_dangerously_set_inner_html import DangerouslySetInnerHTML
from dash.dependencies import Input, Output

import datatable


app = dash.Dash()
app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

DF = pd.read_csv('https://raw.githubusercontent.com/plotly/datasets/master/gapminderDataFiveYear.csv')


app.layout = html.Div([
    html.Script(src='/static/js/custom.js'),
    html.Script(src='/static/js/jquery.dataTables.min.js'),

    # DangerouslySetInnerHTML('''
    #     <link rel="stylesheet" type="text/css" href="//cdn.datatables.net/1.10.12/css/jquery.dataTables.min.css">
    # '''),
    html.Link(href='/static/css/jquery.dataTables.min.css', rel='stylesheet'),
    html.Link(href='/static/css/dash.css', rel='stylesheet'),

    html.H4('Continents'),
    dcc.Dropdown(
        id='continents',
        options=[{'label': i, 'value': i} for i in DF['continent'].unique()],
        value='Asia'
    ),

    html.H4('DataTable'),
    datatable.ExampleComponent(
        id='example',
        columns=DF.columns.tolist(),
        data=DF.values.tolist(),
    ),
])


@app.server.route('/static/<path:path>')
def static_file(path):
    static_folder = os.path.join(os.getcwd(), 'static')
    return send_from_directory(static_folder, path)


@app.callback(
    Output('example', 'data'),
    [Input('continents', 'value')])
def update_table(continent):
    print('Dash updating continent {}'.format(continent))
    filtered_df = DF[DF['continent'] == continent]
    return filtered_df.values.tolist()


if __name__ == '__main__':
    app.run_server(debug=True)
