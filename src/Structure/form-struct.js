const formStructure = {
    elements:{
        'element-1':{id:'ele-1', type: 'text', label: 'First Name'},
        'element-2':{id:'ele-2', type: 'text', label: 'Last Name'},
        'element-3':{id:'ele-3', type: 'password', label: 'Password'},
        'element-4':{id:'ele-4', type: 'password', label: 'Confirm Password'},
        'element-5':{id:'ele-5', type: 'button', label: 'Create'}
    },
    rows:{
        'row-1':{
            id:'row-1',
            elementIds:['ele-1', 'ele-2']
        },
        'row-2':{
            id:'row-2',
            elementIds:['ele-3', 'ele-4']
        },
        'row-3':{
            id:'row-1',
            elementIds:['ele-5']
        }
    }
}