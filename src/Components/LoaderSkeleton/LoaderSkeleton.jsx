import React from 'react';
import { Skeleton, Stack } from '@mui/material';

export default function LoaderSkeleton() {
  return (
    <Stack spacing={1} className="p-4">
      <Skeleton variant="rectangular" height={200} animation="wave" />
      <Skeleton variant="text" height={40} animation="wave" />
      <Skeleton variant="text" height={40} animation="wave" />
      <Skeleton variant="text" height={40} animation="wave" />
    </Stack>
  );
}
