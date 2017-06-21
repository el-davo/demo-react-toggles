import { ReleaseToggle } from '../release-toggles.state';

const RELEASE_TOGGLES = [
    {
        id: 'abc1',
        category: 'Dashboard',
        name: 'test1_name',
        active: true,
        description: 'test1_description',
        created: 'Today'
    },
    {
        id: 'abc2',
        category: 'Unity',
        name: 'test2_name',
        active: false,
        description: 'test2_description',
        created: 'Yesterday'
    },
    {
        id: 'abc3',
        category: 'Unity',
        name: 'test2_name',
        active: true,
        description: 'test2_description',
        created: 'Yesterday'
    },
    {
        id: 'abc4',
        category: 'Unity',
        name: 'test2_name',
        active: true,
        description: 'test2_description',
        created: 'Yesterday'
    },
    {
        id: 'abc5',
        category: 'Unity',
        name: 'test2_name',
        active: false,
        description: 'test2_description',
        created: 'Yesterday'
    },
    {
        id: 'abc6',
        category: 'Unity',
        name: 'test2_name',
        active: true,
        description: 'test2_description',
        created: 'Yesterday'
    }
] as ReleaseToggle[];

export function fetchReleaseToggles(): Promise<ReleaseToggle[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(RELEASE_TOGGLES);
        }, 1000);
    });
}

export function editReleaseToggle(releaseToggle: ReleaseToggle) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(releaseToggle);
        }, 500);
    });
}