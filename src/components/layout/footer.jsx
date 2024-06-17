import React from 'react';
import { Layout } from 'antd';
import { secondColor } from '../common/colors';

const MainFooter = () => {

    return(
        <Layout.Footer style={{ backgroundColor:secondColor }} >
            Footer
        </Layout.Footer>
    );
}

export default MainFooter;