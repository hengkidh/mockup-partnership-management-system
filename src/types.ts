import type { ReactNode } from 'react';

export type ViewMode = 'BUPATI' | 'OPD' | 'ADMIN' | 'MITRA' | 'FORM';

export type StatCard = {
    title: string;
    value: string;
    sub?: string;
    color: string;
    icon: ReactNode;
    max?: string;
    progress?: number;
};

export type DistributionItem = {
    label: string;
    count: number;
    percent: number;
    color: string;
};

export type PipelineItem = {
    label: string;
    count: number;
    color: string;
    bg: string;
};

export type OpdStat = {
    name: string;
    active: number;
    target: number;
};

export type PotentialPartner = {
    name: string;
    type: string;
    match: number;
    opd: string[];
    icon: string;
    color: string;
};

export type VerificationQueueItem = {
    id: string;
    mitra: string;
    jenis: string;
    tgl: string;
    status: string;
    sColor: string;
    action: string;
    aColor: string;
};

export type SystemNotification = {
    text: string;
    time: string;
    color: string;
};

export type MitraStat = {
    title: string;
    value: string;
    color: string;
    icon: ReactNode;
};

export type MitraNotification = {
    text: string;
    time: string;
    color: string;
};
