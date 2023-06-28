import mergeDescriptors from 'merge-descriptors'

/**
 * @param {...Object} args
 * @returns {Object}
 */
export default function multiMergeDescriptors(...args) {
  let redefine
  if (typeof args[args.length - 1] !== 'object') {
    redefine = args.pop()
  }

  // eslint-disable-next-line no-unused-vars
  return args.slice(1).reduce((dest, src, i) => mergeDescriptors(dest, src, redefine), args[0])
}
