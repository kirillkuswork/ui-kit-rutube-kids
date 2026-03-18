import React from 'react';

import { Skeleton } from '@/components/Skeleton';

export const DropdownSkeleton = () => <>
    {Array.from({ length: 5 }, (_, i) => <Skeleton key={i} className='h-4x'/>)}
</>;
