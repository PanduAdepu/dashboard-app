import { Box } from '@mui/system'
import React from 'react'
import { createSvgIcon } from '@mui/material/utils';

// createing svg as icons
const UnionIcon = createSvgIcon(
    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.72815 2.12774L8.19954 0L8.44628 0.463162L8.69302 0L12.1644 2.12774C12.3195 2.21804 12.4249 2.39428 12.4249 2.59691V2.59695V6.33105C12.4249 6.52248 12.3292 6.69923 12.1743 6.79421L8.7006 8.92335C8.63121 8.96773 8.55089 8.99449 8.46501 8.99791C8.45877 8.99816 8.45252 8.99828 8.44628 8.99828C8.35334 8.99828 8.26635 8.97094 8.19193 8.92334L4.71829 6.79421C4.56333 6.69923 4.46771 6.52248 4.46771 6.33105V2.59695V2.59691C4.46771 2.39429 4.57303 2.21805 4.72815 2.12774ZM11.4302 6.02147L8.9436 7.54561V5.04032L11.4302 3.51618V6.02147ZM5.46235 3.51618L7.94896 5.04032V7.54561L5.46235 6.02147V3.51618ZM8.44628 1.07756L5.96741 2.59695L8.44628 4.11635L10.9251 2.59695L8.44628 1.07756ZM12.1781 8.00172L8.70673 10.1295C8.5516 10.2198 8.44628 10.396 8.44628 10.5986V10.5987V14.3328C8.44628 14.5242 8.54191 14.7009 8.69686 14.7959L12.1705 16.9251C12.2407 16.9699 12.322 16.9968 12.4089 16.9997L12.4249 17C12.5178 17 12.6048 16.9727 12.6792 16.9251L16.1528 14.7959C16.3078 14.7009 16.4034 14.5242 16.4034 14.3328V10.5987V10.5986C16.4034 10.396 16.2981 10.2198 16.143 10.1295L12.6716 8.00172L12.4249 8.46488L12.1781 8.00172ZM12.9222 15.5473L15.4088 14.0232V11.5179L12.9222 13.042V15.5473ZM11.9275 13.042L9.44092 11.5179V14.0232L11.9275 15.5473V13.042ZM9.94598 10.5987L12.4249 9.07928L14.9037 10.5987L12.4249 12.1181L9.94598 10.5987ZM0.608946 10.2513C0.534263 10.3447 0.489136 10.466 0.489136 10.5986V14.3328C0.489136 14.5242 0.584764 14.7009 0.739717 14.7959L4.21337 16.9251C4.28779 16.9727 4.37477 17 4.46771 17C4.56065 17 4.64764 16.9727 4.72207 16.925L7.20107 15.4055C7.43954 15.2593 7.52238 14.9334 7.3861 14.6776C7.24983 14.4218 6.94603 14.333 6.70756 14.4792L4.96503 15.5473V13.042L6.7037 11.9765C6.94219 11.8303 7.02506 11.5045 6.88881 11.2487C6.75255 10.9929 6.44877 10.904 6.21028 11.0501L4.46773 12.118L1.98884 10.5986L4.4677 9.07924L6.70756 10.4522C6.94603 10.5984 7.24983 10.5095 7.3861 10.2538C7.52238 9.99796 7.43954 9.6721 7.20107 9.52592L4.71446 8.00168C4.56157 7.90796 4.37386 7.90796 4.22097 8.00167L0.74808 10.1303C0.719179 10.1473 0.69202 10.1673 0.666964 10.1898C0.645975 10.2087 0.626588 10.2293 0.608946 10.2513ZM3.97039 13.042V15.5473L1.48378 14.0232V11.5179L3.97039 13.042Z" fill="#313131"/>,
    'Union',
  );

const WalletIcon = createSvgIcon(
    <>
    <path d="M13.3326 10.4048C13.0986 10.4048 12.8645 10.2381 12.7865 9.98814C12.7085 9.65481 12.8645 9.32147 13.1766 9.23814L16.297 8.15481C16.375 8.15481 16.453 8.07147 16.5311 7.98814C16.6091 7.90481 16.6091 7.82147 16.5311 7.65481L15.2049 3.23814C15.1269 2.98814 14.8928 2.90481 14.7368 2.98814L5.76552 6.07147C5.53148 6.15481 5.45347 6.32147 5.53148 6.57147L5.99955 8.23814C6.07756 8.57147 5.92154 8.90481 5.60949 8.98814C5.29745 9.07147 4.9854 8.90481 4.90739 8.57147L4.43932 6.90481C4.20529 6.07147 4.59535 5.07147 5.45347 4.82147L14.3467 1.73814C15.1269 1.48814 16.063 1.90481 16.297 2.82147L17.6232 7.23814C17.7792 7.65481 17.7012 8.07147 17.5452 8.48814C17.3892 8.90481 16.9991 9.15481 16.6091 9.32147L13.4886 10.4048C13.4106 10.4048 13.3326 10.4048 13.3326 10.4048Z" fill="#313131"/>
    <path d="M3.97126 18.2381C3.50319 18.2381 3.03513 18.0715 2.72308 17.6548C2.41104 17.3215 2.177 16.8215 2.177 16.2381V9.65479C2.177 9.15479 2.33302 8.65478 2.72308 8.23812C3.03513 7.90478 3.50319 7.65479 3.97126 7.65479H12.0064C12.4745 7.65479 12.9425 7.82145 13.2546 8.23812C13.5666 8.57145 13.8007 9.07145 13.8007 9.57145V11.3215C13.8007 11.6548 13.5666 11.9881 13.1766 11.9881C12.7865 11.9881 12.5525 11.7381 12.5525 11.3215V9.57145C12.5525 9.40479 12.4745 9.23812 12.3965 9.07145C12.2404 8.90478 12.0844 8.90479 11.9284 8.90479H3.97126C3.81524 8.90479 3.65921 8.98812 3.50319 9.07145C3.34717 9.23812 3.34717 9.40479 3.34717 9.57145V16.1548C3.34717 16.3215 3.42518 16.4881 3.50319 16.6548C3.65921 16.8215 3.81524 16.8215 3.97126 16.8215H12.0844C12.2404 16.8215 12.3965 16.7381 12.5525 16.6548C12.7085 16.5715 12.7085 16.3215 12.7085 16.1548V14.4048C12.7085 14.0715 12.9425 13.7381 13.3326 13.7381C13.7227 13.7381 13.9567 13.9881 13.9567 14.4048V16.1548C13.9567 16.6548 13.8007 17.1548 13.4106 17.5715C13.0986 17.9048 12.6305 18.1548 12.0844 18.1548H3.97126C3.97126 18.2381 3.97126 18.2381 3.97126 18.2381Z" fill="#313131"/>
    <path d="M5.14142 18.2382C4.82938 18.2382 4.51733 17.9882 4.51733 17.5715V8.40483C4.51733 8.07149 4.75137 7.73816 5.14142 7.73816C5.53148 7.73816 5.76551 7.98816 5.76551 8.40483V17.6548C5.76551 17.9882 5.45347 18.2382 5.14142 18.2382Z" fill="#313131"/>
    <path d="M11.3043 15.1548C10.2122 15.0715 9.35405 14.1548 9.35405 12.9881C9.27604 11.9048 10.1342 10.9048 11.2263 10.8215H13.5667C14.2688 10.8215 14.8148 11.4881 14.8148 12.2381V13.7381C14.8148 14.4881 14.2688 15.0715 13.5667 15.1548H11.3043ZM11.3043 12.0715C10.8363 12.0715 10.5242 12.4881 10.5242 12.9881C10.5242 13.4881 10.8363 13.9048 11.3043 13.9048H13.5667L13.6447 13.8215V12.2381C13.6447 12.1548 13.5667 12.0715 13.5667 12.0715H11.3043Z" fill="#313131"/>
    <path d="M12.6304 13.7381C12.2404 13.7381 11.9283 13.4048 11.9283 13.0715C11.9283 12.6548 12.2404 12.3215 12.6304 12.3215C13.0205 12.3215 13.2545 12.6548 13.2545 13.0715C13.2545 13.4048 12.9425 13.7381 12.6304 13.7381Z" fill="#313131"/>
    <path d="M11.8503 7.73814C11.6163 7.73814 11.3823 7.57147 11.3043 7.32147C11.2263 7.1548 11.1482 7.07147 10.9922 7.07147C10.8362 7.07147 10.6802 7.1548 10.6022 7.32147C10.4461 7.6548 10.1341 7.73814 9.82205 7.57147C9.51001 7.4048 9.432 7.07147 9.58802 6.73814C9.90007 6.1548 10.4461 5.73814 11.1482 5.82147C11.6943 5.82147 12.2404 6.23814 12.3964 6.9048C12.4744 7.23814 12.3184 7.57147 12.0064 7.6548C11.9284 7.73814 11.8503 7.73814 11.8503 7.73814Z" fill="#313131"/>
    </>,
    'Wallet'
)

const CalenderIcon = createSvgIcon(
    <>
        <path d="M16.141 18.25H3.81523C2.95711 18.25 2.255 17.5 2.255 16.5833V5.41667C2.255 4.5 2.95711 3.75 3.81523 3.75H16.141C16.9991 3.75 17.7012 4.5 17.7012 5.41667V16.5833C17.7012 17.5 16.9991 18.25 16.141 18.25ZM3.81523 5.08333C3.5812 5.08333 3.42517 5.25 3.42517 5.5V16.6667C3.42517 16.9167 3.5812 17.0833 3.81523 17.0833H16.141C16.375 17.0833 16.5311 16.9167 16.5311 16.6667V5.41667C16.5311 5.16667 16.375 5 16.141 5H3.81523V5.08333Z" fill="#313131"/>
        <path d="M17.0771 9.08333H2.87909C2.56705 9.08333 2.255 8.83333 2.255 8.41667C2.255 8 2.48904 7.75 2.87909 7.75H17.0771C17.3892 7.75 17.7012 8 17.7012 8.41667C17.7012 8.83333 17.3892 9.08333 17.0771 9.08333Z" fill="#313131"/>
        <path d="M6.62359 6.58333C6.31155 6.58333 6.07751 6.33333 6.07751 5.91667V2.41667C6.07751 2.08333 6.31155 1.75 6.7016 1.75C7.09166 1.75 7.32569 2 7.32569 2.41667V6C7.24768 6.33333 7.01365 6.58333 6.62359 6.58333Z" fill="#313131"/>
        <path d="M13.3326 6.58333C13.0205 6.58333 12.7085 6.33333 12.7085 5.91667V2.41667C12.7085 2.08333 12.9425 1.75 13.3326 1.75C13.7226 1.75 13.8787 2.08333 13.8787 2.41667V6C13.8787 6.33333 13.6446 6.58333 13.3326 6.58333Z" fill="#313131"/>
        <path d="M5.92148 12.1667C5.45341 12.1667 5.06335 11.75 5.06335 11.25C5.06335 10.75 5.45341 10.3334 5.92148 10.3334C6.38955 10.3334 6.7796 10.75 6.7796 11.25C6.7796 11.75 6.38955 12.1667 5.92148 12.1667Z" fill="#313131"/>
        <path d="M5.92148 15.6666C5.45341 15.6666 5.06335 15.25 5.06335 14.75C5.06335 14.25 5.45341 13.8333 5.92148 13.8333C6.38955 13.8333 6.7796 14.25 6.7796 14.75C6.7796 15.25 6.38955 15.6666 5.92148 15.6666Z" fill="#313131"/>
        <path d="M9.97812 12.1667C9.51005 12.1667 9.12 11.75 9.12 11.25C9.12 10.75 9.51005 10.3334 9.97812 10.3334C10.4462 10.3334 10.8362 10.75 10.8362 11.25C10.8362 11.75 10.4462 12.1667 9.97812 12.1667Z" fill="#313131"/>
        <path d="M9.97812 15.6666C9.51005 15.6666 9.12 15.25 9.12 14.75C9.12 14.25 9.51005 13.8333 9.97812 13.8333C10.4462 13.8333 10.8362 14.25 10.8362 14.75C10.8362 15.25 10.4462 15.6666 9.97812 15.6666Z" fill="#313131"/>
        <path d="M14.0346 12.1667C13.5666 12.1667 13.1765 11.75 13.1765 11.25C13.1765 10.75 13.5666 10.3334 14.0346 10.3334C14.5027 10.3334 14.8928 10.75 14.8928 11.25C14.8928 11.75 14.4247 12.1667 14.0346 12.1667Z" fill="#313131"/>
        <path d="M14.0346 15.6666C13.5666 15.6666 13.1765 15.25 13.1765 14.75C13.1765 14.25 13.5666 13.8333 14.0346 13.8333C14.5027 13.8333 14.8928 14.25 14.8928 14.75C14.8928 15.25 14.4247 15.6666 14.0346 15.6666Z" fill="#313131"/>
    </>,
    'Calender'
)

const Details = () => {
  return (
    <>
        <Box sx={{
            display: 'grid',
            gap: 1,
            gridTemplateColumns: 'repeat(3, 1fr)',
        }} >
            <Box mr={10} sx={{ display: 'flex', width: "167.57px" }}>
                <UnionIcon sx={{ position: "relative", top: "32px", right: "10px"}}/>
                <Box>
                    <p>Business Group:</p>
                    <p>MashreqBank</p>
                </Box>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <WalletIcon sx={{ position: "relative", top: "32px", right: "10px"}}/>
                <Box>
                    <p>Pay Band:</p>
                    <p>L</p>
                </Box>
            </Box>
            <Box sx={{ display: 'flex' }}>
                <CalenderIcon sx={{ position: "relative", top: "32px", right: "10px"}}/>
                <Box>
                    <p>Joining Date:</p>
                    <p>20-June-2007</p>
                </Box>
            </Box>
            <Box sx={{ display: 'flex' }}>
                {/* <img></img> */}
                <Box>
                    <p>Telephone Number:</p>
                    <p>050-1234567</p>
                </Box>
            </Box>
            <Box sx={{ display: 'flex' }}>
                {/* <img></img> */}
                <Box>
                    <p>Branch/Dept:</p>
                    <p>Injaz - Merchant Services</p>
                </Box>
            </Box>
            <Box sx={{ display: 'flex' }}>
                {/* <img></img> */}
                <Box>
                    <p>Nationality</p>
                    <p>Indian</p>
                </Box>
            </Box>
        </Box>
    </>
  )
}

export default Details