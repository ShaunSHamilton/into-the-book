FROM gitpod/workspace-full:2024-03-06-11-21-33

WORKDIR /workspace/into-the-book

COPY --chown=gitpod:gitpod . .
