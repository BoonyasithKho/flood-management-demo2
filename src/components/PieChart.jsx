import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

const pieParams = { height: 200, margin: { right: 5 } };

export default function PieColor() {
    const data = [
        { value: 20, label: 'รอการติดตั้ง', color: '#31C0CE' },
        { value: 4, label: 'จัดเก็บในส่วนกลาง', color: 'green' },
        { value: 13, label: 'ถอนการติดตั้ง', color: 'red' },
        { value: 23, label: 'หยุดการทำงาน', color: 'orange' },
        { value: 35, label: 'ติดตั้ง', color: 'blue' },

    ];
    return (
        <Stack direction="row" width="100%" textAlign="center" spacing={2}>
            <Box flexGrow={1}>
                <PieChart
                    series={[{
                        data,
                        arcLabel: (item) => `${item.value} %`,
                    }]}
                    {...pieParams}
                    slotProps={{ legend: { hidden: true } }}
                    sx={{
                        [`& .${pieArcLabelClasses.root}`]: {
                            fill: 'white',
                            fontWeight: 'bold',
                        },
                    }}
                />
            </Box>
        </Stack>
    );
}
