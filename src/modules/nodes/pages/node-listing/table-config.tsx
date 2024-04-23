import ReactJson from 'react-json-view';


interface GetTableColumnsConfigProps {}

export const getTableColumnsConfig = (props: GetTableColumnsConfigProps) => {
    const columnConfig: any[] = [
        {
            title: '#',
            key: 'id',
            dataIndex: 'id',
            width: 50,
            align: 'center',
            render: (_id: string, _record: any, index: number) => <span className="capitalize">{index + 1}</span>
        },
        {
            title: 'Name',
            key: 'name',
            dataIndex: 'name',
            width: 200
        },
        {
            title: 'Type',
            key: 'type',
            dataIndex: 'type',
            width: 100
        },
        {
            title: 'Kind',
            key: 'kind',
            dataIndex: 'kind',
            width: 100,
            render: (kind: string) => <span className="capitalize">{kind}</span>
        },
        {
            title: 'JSON Options',
            key: 'dataOptions',
            dataIndex: 'dataOptions',
            render: (dataOptions: any) => {
                return (
                    <ReactJson
                        // theme={'paraiso'}
                        name={false}
                        src={dataOptions}
                        displayDataTypes={false}
                        collapsed
                        style={{
                            maxHeight: '80vh',
                            overflow: 'auto'
                        }}
                    />
                );
            }
        }
    ];

    return columnConfig;
};
