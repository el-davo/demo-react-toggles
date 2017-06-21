export const releaseToggles = {
    isFetchingReleaseToggles: true,
    showeEditReleaseToggleModal: false,
    releaseToggles: {},
    editingReleaseToggle: null
} as ReleaseTogglesState;

export interface ReleaseTogglesState {
    isFetchingReleaseToggles: boolean;
    showeEditReleaseToggleModal: boolean;
    releaseToggles: ReleaseToggles;
    editingReleaseToggle: ReleaseToggle;
}

export interface ReleaseToggles {
    [key: string]: ReleaseToggle;
}

export interface ReleaseToggle {
    id: string;
    category: string;
    name: string;
    description: string;
    active: boolean;
    created: string;
}