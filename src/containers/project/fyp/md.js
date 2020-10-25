import React from 'react'
import R from 'components/reservedWord'
import S from 'components/stringWord'
import C from 'components/commentWord'
import { Typography } from '@material-ui/core'


const FypMd = (props) => {
    return (
        <div>
            <R variant="h6"># Security Compliance Checker Tool for Cloud Environment</R>
            <br></br>
            <S>** Kubernetes Security **</S>
            <br></br>
            <C>{'// '}Google Cloud Platform, Amazon Web Services</C>
            <ul>
                <li>
                    <Typography>
                        Researches on securing Kubernetes cluster 
                        on managed cloud Kubernetes engine
                    </Typography>
                </li>
                <li>
                    <Typography>
                        RBAC, NetworkPolicy, PodSecurityPolicy, Image Scanning
                    </Typography>
                </li>
            </ul>
        </div>
    )
}

export default FypMd