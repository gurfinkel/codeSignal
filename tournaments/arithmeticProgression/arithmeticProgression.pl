#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub arithmeticProgression {
    my ($element1, $element2, $n) = @_;

    return $element1 + ($n - 1) * ($element2 - $element1);
}
