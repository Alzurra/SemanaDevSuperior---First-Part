const DataTable = () => {
    return (
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Vendedor</th>
                        <th>Clientes visitados</th>
                        <th>Negócios fechados</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>22/04/2021</td>
                        <td>Barry Allen</td>
                        <td>34</td>
                        <td>25</td>
                        <td>15017.00</td>
                    </tr>
                    <tr>
                        <td>10/04/2021</td>
                        <td>Tony Stark</td>
                        <td>30</td>
                        <td>15</td>
                        <td>18500.00</td>
                    </tr>
                    <tr>
                        <td>15/03/2021</td>
                        <td>Michael Douglas</td>
                        <td>40</td>
                        <td>20</td>
                        <td>15680.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DataTable;