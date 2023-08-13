export default function log({ next, to }) {
    console.log('Can Use to put Front log', to.name);

    return next();
}
