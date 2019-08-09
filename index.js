exports.pinyinToAlphabet = function (pinyin) {
  return pinyin.replace(/([āáǎà])|([ēéěè])|([īíǐì])|([ōóǒò])|([ūúǔù])|([ǖǘǚǜ])|([ĀÁǍÀ])|([ĒÉĚÈ])|([ĪÍǏÌ])|([ŌÓǑÒ])|([ŪÚǓÙ])|([ǕǗǙǛ])/g,
    function (match, a, e, i, o, u, ü, A, E, I, O, U, Ü) {
      if (a) return 'a'
      else if (e) return 'e'
      else if (i) return 'i'
      else if (o) return 'o'
      else if (u) return 'u'
      else if (ü) return 'u:'
      else if (A) return 'A'
      else if (E) return 'E'
      else if (I) return 'I'
      else if (O) return 'O'
      else if (U) return 'U'
      else if (Ü) return 'U:'
    }
  )
}
