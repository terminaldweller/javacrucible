#!/usr/bin/env python


# def getClassPath() -> list:
#     import subprocess
#     import sys

#     proj_root = sys.argv[0][0 : sys.argv[0].rfind("/")]
#     CMD = [proj_root + "/gradlew", "properties"]
#     cp = subprocess.run(CMD, capture_output=True)
#     lines = cp.stdout.decode("utf-8").split("\n")
#     for line in lines:
#         if line.find("ClassPath") > 0:
#             bin = line.find("bin") + 2
#             bin_beg = line.find("[", bin)
#             bin_end = line.find("]", bin_beg)
#             src = line.find("src") + 2
#             src_beg = line.find("[", src)
#             src_end = line.find("]", src_beg)
#             # print(line[bin_beg + 1 : bin_end])
#             # print(line[src_beg + 1 : src_end])
#             return [line[bin_beg + 1 : bin_end], line[src_beg + 1 : src_end]]


# paths = getClassPath()
# print(paths)


def Settings(**kwargs):
    if kwargs["language"] == "java":
        return {
            "ls": {
                "java.import.gradle.enabled": True,
                "java.import.gradle.offline.enabled": True,
                "java.import.gradle.wrapper.enabled": True,
                "java.maven.downloadSources": True,
                "java.import.maven.enabled": True,
                "java.signatureHelp.enabled": True,
                "java.rename.enabled": True,
                "java.eclipse.downloadSources": True,
                "java.project.sourcePaths": "/home/devi/.gradle/caches/modules-2/files-2.1",
                "extendedClientCapabilities": {
                    "classFileContentsSupport": True
                },
            }
        }
