#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub latinLettersSearchRegExp {
    my ($input) = @_;

    return $input =~ /[A-Za-z]/ ? 1 : 0;
}
