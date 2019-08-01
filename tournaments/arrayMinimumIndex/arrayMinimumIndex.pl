#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub arrayMinimumIndex {
    my ($inputArray) = @_;

    use List::Util qw( min first );

    return first { $$inputArray[$_] == min(@$inputArray) } 0..@$inputArray;
}
